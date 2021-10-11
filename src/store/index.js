import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import CartModule from './cart';

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const resourcesUrl = `${baseUrl}/resources`;
const tagsUrl = `${baseUrl}/tags`;

export default new Vuex.Store({
    strict: true,
    modules: { cart: CartModule },
    state: {
        resources: [],
        tagsData: [],
        resourcesTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentTag: "All"
    },
    getters: {
        resourcesFilteredByTag: state =>
            state.resources.filter(r => state.currentTag == "All" || r.tag == state.currentTag),
        processedresources: (state, getters) =>
        { let index = (state.currentPage - 1) * state.pageSize;
            return getters.resourcesFilteredByTag.slice(index, index + state.pageSize); },
        pageCount: (state, getters) =>
            Math.ceil(getters.resourcesFilteredByTag.length / state.pageSize),
        tags: state => ["All", ...state.tagsData]
    },
    mutations: {
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setPageSize(state, size) {
            state.pageSize = size;
            state.currentPage = 1;
        },
        setCurrentTag(state, tag) {
            state.currentTag = tag;
            state.currentPage = 1;
        },
        setData(state, data) {
            state.resources = data.pdata;
            state.resourcesTotal = data.pdata.length;
            state.tagsData = data.cdata.sort();
        }
    },
    actions: {
        async getData(context) {
            /*
            The Axios package provides a GET method which is used to send the HTTP GET requests
            to the web service. In this async getData promise, we await the results of the get
            requests. The get method returns an object whose data property returns a JavaScript
            object that has been parsed from the JSON response from the web service.
             */
            let pdata = (await Axios.get(resourcesUrl)).data;
            let cdata = (await Axios.get(tagsUrl)).data;
            context.commit("setData", { pdata, cdata} );
        }
    }
})