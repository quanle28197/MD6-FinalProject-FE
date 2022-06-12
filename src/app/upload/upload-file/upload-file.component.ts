import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference} from '@angular/fire/storage';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
  selectFile: File;
  ref: AngularFireStorageReference;
  downloadURL: string;
  checkUpLoadFile = false;
  @Output()
  giveURLtoCreate = new EventEmitter<string>();

  constructor(private afStorage: AngularFireStorage) {
  }

  ngOnInit(): void {

  }

  onFileChanged(event: any) {
    this.selectFile = event.target.files[0];
    this.onUpLoad();
  }

  onUpLoad() {
    this.checkUpLoadFile = true;
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.ref.put(this.selectFile).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
      this.checkUpLoadFile = false;
      this.downloadURL = downloadURL;
      this.giveURLtoCreate.emit(this.downloadURL);
      console.log(this.downloadURL);
      return downloadURL;
    }).catch(error => {
      console.log('Fail Upload ' + error);
    });
  }
}

