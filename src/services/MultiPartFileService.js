import axios from "axios";
import swal from "sweetalert";
import GeneralService from "./GeneralService";
import { path } from "./GeneralService";

export default class MultiPartFileService extends GeneralService {
	constructor(entityPath){
		super(entityPath);
	}

	async put(entity) {
		let resp;
		let obj = this;
		const data = new FormData();

		for(var prop in entity) {
			if(prop == "creationDate" || prop == "lastUpdate"){
				continue;
			}

			data.append(prop, entity[prop]);  
		}
        
		await axios.put(`${path}/${this.entityPath}/${entity.id}`, data, {
			headers: {
				"content-type": "multipart/form-data" ,
				"Authorization" : localStorage.getItem("Authorization")
			}
		}).then(() => {
			resp = true;
			swal({
				title: "Atualizado com Sucesso",
				icon: "success",
			});
		}).catch(function (error) {
			resp = false;
			obj.errorResponse(error);
		});
		return resp;
	}

	async post(entity) {
		let response;
		let obj = this;
		const data = new FormData();

		for(var prop in entity) {
			if(prop == "creationDate" || prop == "lastUpdate"){
				continue;
			}
			data.append(prop, entity[prop]);  
		}

		await axios.post(`${path}/${this.entityPath}`, data, {
			headers: {
				"content-type": "multipart/form-data" ,
				"Authorization" : localStorage.getItem("Authorization")
			}
		}).then(() => {
			swal({
				title: "Cadastrado com Sucesso",
				icon: "success",
			});
			response = true;
		}).catch(function (error) {
			obj.errorResponse(error);
		});
		return response;
	}
}

