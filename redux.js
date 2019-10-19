const redux = require('redux');
// nama const bebas 
const createStore = redux.createStore;

// membuat nilai default
const initialState = {
    nilai: 0,
    age: 17,
}


// Reducer
// tidak ada yang bisa merubah state slain reducer
const rootReducer = (state = initialState, action) => {
    // nah disini yang di sebut Global State 
    // ini sebagai wadah besar untuk menyipan objek" kita
    if(action.type === 'ADD_AGE')
    {
        return{
            // ini untuk mengcopy state biar tidak ke hapus state default nya
            ...state,
            age: state.age + 1
        }
    }
    switch(action.type){
        case 'ADD_AGE':
            return{
                // ini untuk mengcopy state biar tidak ke hapus state default nya
                ...state,
                age: state.age + 1
            }
        case 'NILAI_CHANGE':
            return{
                ...state,
                nilai: state.nilai + action.newValue
            }
        default:
            return state;
    }
    return state;
}

// Store 
// createStore function dari redux yang sudah di deklarasikan di atas
const store = createStore(rootReducer);
console.log(store.getState());

// Subcription
// Setiap kali ada berubahan pada Store maka Subcription akan terpanggil
// ketika panggil dispacth subcribtion terpanggil
// fungsion yang akan selalu di panggil setiap kali store berubah, 
store.subscribe( () => {
    console.log('store change', store.getState())
})


// Dispatch Action
// Dispatch untuk meamanggil list - list yang ada di Reducer
store.dispatch({type: 'ADD_AGE'})
// DISPATCH bisa memberikan nilai atau tidak, but type wajib hukum nya
store.dispatch({type: 'NILAI_CHANGE', newValue: 12})
console.log(store.getState())


