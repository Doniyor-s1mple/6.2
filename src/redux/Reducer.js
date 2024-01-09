export function Reducer(state = {
    tasks: [
        { id: 1, title: 'task1', status: 'open' },
        { id: 2, title: 'task2', status: 'inprog' },
        { id: 3, title: 'task3', status: 'completed' },
        { id: 4, title: 'task4', status: 'open' },
        { id: 5, title: 'task5', status: 'inprog' },
        { id: 6, title: 'task6', status: 'completed' },
        { id: 7, title: 'task7', status: 'open' },
        { id: 8, title: 'task8', status: 'inprog' },
        { id: 9, title: 'task9', status: 'completed' },
        { id: 10, title: 'task10', status: 'open' },
    ],
    pushtask: ''

}, action) {
    switch (action.type) {
        case 'addTask':
            var t = [...state.tasks]
            t.push({
                id: state.tasks.length + 1,
                title: action.values.task,
                status: action.values.status,

            })
            console.log(action);
            state = {
                ...state,
                tasks: t
            }
            break
        case 'pushTask':
            state = { ...state, pushtask: action.item }
            break
        case 'editTask':
            const e = state.tasks.map((item) => {
                if (item.id === state.pushtask.id) {
                    item = {
                        ...item,
                        title: action.values.task,
                        status: action.values.status,

                    }
                }
                return item
            })
            state = {
                ...state,
                tasks: e
            }
            break

    }
    return state
}