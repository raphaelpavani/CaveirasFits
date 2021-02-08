const initialState = {
  name:'',
  level:'', //beginner, intermediate, advanced
  workoutDays:[], //1-0
  myWorkours:[],
  lastWorkout:'', //ID
  dailyProgress:['2021-02-08', '2021-02-09']
};

export default (state = initialState, action)=> {
  switch(action.type){
    case 'SET_NAME':
      return{...state, name:action.payload.name};
      break;
  }
  return state;

}