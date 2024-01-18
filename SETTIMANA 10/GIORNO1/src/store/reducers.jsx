// store/reducers.js
const initialState = {
    jobs: [],
    companyJobs: [],
    favorites: [],
  };
  
  const reducer = (state = initialState, action) => {
    console.log("Action:", action.type); // Log per monitorare le azioni
  
    switch (action.type) {
      case 'SET_JOBS':
        console.log("Setting jobs:", action.payload); // Log per verificare i jobs
        return {
          ...state,
          jobs: action.payload,
        };
  
      case 'SET_COMPANY_JOBS':
        console.log("Setting company jobs:", action.payload); // Log per verificare i company jobs
        return {
          ...state,
          companyJobs: action.payload,
        };
  
      case 'ADD_TO_FAVORITES':
        console.log("Adding to favorites:", action.payload); // Log per verificare l'aggiunta ai favoriti
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
  
      case 'REMOVE_FROM_FAVORITES':
        console.log("Removing from favorites:", action.payload); // Log per verificare la rimozione dai favoriti
        return {
          ...state,
          favorites: state.favorites.filter((company) => company !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  