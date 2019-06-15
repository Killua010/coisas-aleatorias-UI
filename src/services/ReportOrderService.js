import axios from "axios";
import GeneralService from "./GeneralService";

import { path } from "./GeneralService";

export default class ReportOrderService extends GeneralService {
	constructor(entityPath){
		super(entityPath);
	}

	async getAllOrders() {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/orders`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

    
	async getAllOrdersByCategories(mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/orders/categories/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersByProduct(mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/orders/products/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersCategory() {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersCategory`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersCategoryByDate(date1, date2) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersCategory/${date1}/${date2}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersByProductByDate(date1, date2) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersProduct/${date1}/${date2}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersCategoryGender(gender, mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersCategory/gender/${gender}/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}


	async getAllOrdersCategoryGenderAge(gender, start, end, mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersCategory/gender/${gender}/age/${start}/${end}/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersProduct() {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersProduct`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}

	async getAllOrdersProductGender(gender, mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersProduct/gender/${gender}/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}


	async getAllOrdersProductGenderAge(gender, start, end, mounth) {
		let data = null;
		await axios.get(`${path}/${this.entityPath}/ordersProduct/gender/${gender}/age/${start}/${end}/${mounth}`)
			.then(res => {
				data = res.data;
			}).catch(function (error) {
				this.errorResponse(error);
			});
        
		return await data;
	}
}