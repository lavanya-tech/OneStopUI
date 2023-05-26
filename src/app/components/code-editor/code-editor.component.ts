import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';
import { SubmitService } from 'src/app/core/services/submit.service';
import { MonacoEditorConstructionOptions } from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css'],
})
export class CodeEditorComponent implements OnInit {
  @ViewChild('editor') private editorElmRef!: ElementRef<HTMLDivElement>;
  @Input() problemId: any;
  @Input() contestId: any;

  modeSelector!: HTMLSelectElement;
  editor!: ace.Ace.Editor;
  submissionResult: any ;
  status: string = 'accepted!';
  compileResult: string = 'CodeMithra';
  showResult: boolean = true;
  statusCheck: boolean = false;
  run: boolean = false;
  selectedOption: string ='option1';
  url:string="http://localhost:8081/compile";

  formData = {
    code: 'def run()',
    questionId: '',
    userId: '',
    ouput: '',
    input: '',
  };
  
  constructor(
    private elementRef: ElementRef,
    private submitService: SubmitService
  ) {}
  getEndpointUrl(): string {
    switch (this.selectedOption) {
      case 'option1':
        return 'http://localhost:8081/compile';
      case 'option2':
        return 'http://127.0.0.1:8000/run';
      case 'option3':
        return 'http://127.0.0.1:8000/run';
      default:
        return 'http://localhost:8081/compile';
    }
  }
    onChange(endpoint:any){
      this.selectedOption=endpoint.target.value;
      this.url=this.getEndpointUrl();
    }
  OnSubmit() {
    const data = {
      "code": this.editor.getValue(),
      "input": "",
      "output": "",
      "userId": "S23",
      "questionId": "A12"
  } 

    this.submitService.postData(data,this.url).subscribe(
      (response) => {this.submissionResult = JSON.stringify(response);
      console.log(response)},
      (error) => console.log('Error:', error)
    );
  }
  OnCompile() {
    this.run = true;
    setTimeout(() => {
      this.run = false;
    }, 1000);
  }

  ngOnInit() {
    const editorElmRef = this.elementRef.nativeElement.querySelector('#editor');

    const editor = ace.edit(editorElmRef);
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
    console.log(editor.getValue());

    this.editor = editor;

    // get reference to mode selector element
    this.modeSelector =
      this.elementRef.nativeElement.querySelector('#mode-selector');

    // add event listener to mode selector
    if (this.modeSelector) {
      this.modeSelector.addEventListener('change', (event) => {
        const mode = (event.target as HTMLInputElement).value;
        console.log(mode);
        this.editor.session.setMode(`ace/mode/${mode}`);
      });
    }
  }

  submitSolution() {
    if (this.contestId) {
      console.log('Incontest');
    } else {
      this.submitService.submitInPractice(this.problemId, '', '');
      console.log('Inpractice');
    }
  }
}
