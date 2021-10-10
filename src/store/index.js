import Vue from "vue";
import Vuex from "vuex";

import Axios from "axios";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const resourcesUrl = `${baseUrl}/resources`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
    strict: true,
    state: {
        resources: [],
        categoriesData: [],
        resourcesTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "All"
    },
    getters: {
        resourcesFilteredByCategory: state => state.resources.filter(p => state.currentCategory == "All" || p.category == state.currentCategory),
        processedresources: (state, getters) => { let index = (state.currentPage - 1) * state.pageSize; return getters.resourcesFilteredByCategory.slice(index, index + state.pageSize); },
        pageCount: (state, getters) => Math.ceil(getters.resourcesFilteredByCategory.length / state.pageSize),
        categories: state => ["All", ...state.categoriesData]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
            state.currentCategory = category;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.resources = data.pdata;
            state.resourcesTotal = data.pdata.length;
            state.categoriesData = data.cdata.sort();
        }
    },
    actions: {
        async getData(context) {
            /*
            The Axios package provides a GET method which is used to send the HTTP GET requests to the web service.
            In this async getData promise, we await the results of the get requests. The get method returns an object
            whose data property returns a JavaScript object that has been parsed from the JSON response from the web service.
             */
            let pdata = (await Axios.get(resourcesUrl)).data;
            let cdata = (await Axios.get(categoriesUrl)).data;
            context.commit("setData", { pdata, cdata} );
        }
    }
})