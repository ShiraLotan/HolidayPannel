export const LoadVacation = () => {

    return async function (dispatch) {
        let allVacations = [];
            let res = await fetch(`http://localhost:3000/vacations`);
            let res1 = await res.json();
            allVacations= res1;


        dispatch({
            type: "VACATION_LOADED",
            data: allVacations
        });


    };
}