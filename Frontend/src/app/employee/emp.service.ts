import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  
  customerdetails 
  
  constructor(private http: HttpClient) { }
  
  getDetails(val: any) {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
      );
    return this.http.get("https://ij024pod5retailbankingcustms.azurewebsites.net/customer/getCustomerDetails/"+val,{headers:header});
  }

  createCustomer(cust){
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
      );
    return this.http.post("https://ij024pod5retailbankingcustms.azurewebsites.net/customer/createCustomer",cust,{headers: header});
  }

  viewCustomer(id){
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
      );
    return this.http.get("https://ij024pod5retailbankingcustms.azurewebsites.net/customer/getCustomerDetails/"+id,{headers: header});
  }

  createAccount(value,id){
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
      );
    return this.http.post("https://ij024pod5retailbankingacctms.azurewebsites.net/account-ms/createAccount/"+id,value,{headers:header});
  }

  onDeposit(val){
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    return this.http.post("https://ij024pod5retailbankingacctms.azurewebsites.net/account-ms/deposit",val,{headers:header});
  }

  onDelete(id){
    let header = new HttpHeaders().set(
      "Authorization",localStorage.getItem("token")
    );
    return this.http.delete("https://ij024pod5retailbankingcustms.azurewebsites.net/customer/deleteCustomer/"+id,{headers:header});
  }

  onServiceCharge(){
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    return this.http.post("https://ij024pod5retailbankingrulesms.azurewebsites.net/rules/serviceCharges",null,{headers:header});
  }

}
