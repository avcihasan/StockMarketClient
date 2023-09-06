import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/common/models/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
checkErrors:boolean=false;
  errors:string[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        surname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]],
        dateOfBirth: ['', [Validators.required]],
        password: ['', [Validators.required]],
        passwordConfirm: ['', [Validators.required]],
      },
      {
        validators: (group: AbstractControl): ValidationErrors | null => {
          let sifre = group.get('password').value;
          let sifreTekrar = group.get('passwordConfirm').value;
          return sifre === sifreTekrar ? null : { notSame: true };
        },
      }
    );
  }

  get validation(){
    this.errors=[];
    if(this.form.controls["name"].errors!=null) this.errors.push("Ad Boş Olamaz !");
    if(this.form.controls["surname"].errors!=null) this.errors.push("Soyad Boş Olamaz !");
    if(this.form.controls["username"].errors!=null) this.errors.push("Kullanıcı Adı Boş Olamaz !");
    if(this.form.controls["phoneNumber"].errors!=null) this.errors.push("Telefon Boş Olamaz !");
    if(this.form.controls["dateOfBirth"].errors!=null) this.errors.push("Doğum Tarihi Boş Olamaz !");
    if(this.form.controls["password"].errors!=null) this.errors.push("Şifre Boş Olamaz !");
    if(this.form.controls["passwordConfirm"].errors!=null) this.errors.push("Şifre Tekrar Boş Olamaz !");
    if(this.form.errors!=null && this.form.controls["passwordConfirm"].errors==null &&this.form.controls["password"].errors==null) this.errors.push("Şifreler Uyuşmuyor!");


    if(this.errors.length==0) this.checkErrors=false;

    return this.errors;
  }
  async createUser() {

console.log(this.form.invalid);
if(this.form.invalid) this.checkErrors=true;

  //  await this.userService.createUser(this.form.value);
  }
}
