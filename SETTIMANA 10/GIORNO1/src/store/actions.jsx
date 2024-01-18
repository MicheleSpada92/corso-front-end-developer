// store/actions.js
// Le azioni asincrone possono essere gestite con Redux Thunk
export const fetchData = () => async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${searchQuery}&limit=20`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
      } else {
        console.error('Error fetching results');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  export const fetchCompanyJobs = (company) => async (dispatch) => {
    try {
      const response = await fetch(`https://strive-benchmark.herokuapp.com/api/jobs?company=${company}`);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setCompanyJobs(data));
      } else {
        console.error('Error fetching results');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  // Le azioni sincrone possono essere gestite normalmente
  export const setJobs = (jobs) => ({
    type: 'SET_JOBS',
    payload: jobs,
  });
  
  export const setCompanyJobs = (companyJobs) => ({
    type: 'SET_COMPANY_JOBS',
    payload: companyJobs,
  });
  
  export const addToFavorites = (company) => ({
    type: 'ADD_TO_FAVORITES',
    payload: company,
  });
  
  export const removeFromFavorites = (company) => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: company,
  });
  