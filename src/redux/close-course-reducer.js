const OPEN_COURSE = 'OPEN_COURSE';

let initialState = {
    closeCourse: true
}

const closeCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_COURSE: {
            return {
                ...state,
                closeCourse: false
            }
        }
        default:
            return state;
    }
}

export const closeCourseOff = (action) => ({type: OPEN_COURSE, action});
export default closeCourseReducer;