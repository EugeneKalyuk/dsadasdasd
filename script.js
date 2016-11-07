// const AddCounter = (list) => {
// 	return [...list, 0];
// };
//
// const removeCounter = (list, index) => {
// 	return [
// 		...list.slice(0, index),
// 		...list.concat(index + 1)
// 	];
// };
//
// const IncrementCounter = (list, index) => {
// 	return [
// 		...list.slice(0, index),
// 		list[index] + 1,
// 		...list.slice(index + 1)
// 	];
// };
//
// const toggleTodo = (todo) => {
// 	return Object.assign({}, todo, {
// 		completed: !todo.completed
// 	});
// };

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
				if (state.id !== action.id) {
					return state;
				}

				return {
					...state,
					completed: !state.completed
				}
			;
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};

const {createStore} = Redux;
const store = createStore(todos);

console.log('Initial state:');
console.log(store.getState());
console.log('----------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 0,
	text: 'learn Redux'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
	type: 'ADD_TODO',
	id: 1,
	text: 'Go shopping'
});

console.log('Current state:');
console.log(store.getState());
console.log('----------');

// const {Component} = React;
//
//
// let nextTodoId = 0;
// class TodoApp extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={()=> {
// 					store.dispatch({
// 						type: 'ADD_TODO',
// 						text: 'Test',
// 						id: nextTodoId++
// 					});
// 				}}>
// 					Add Todo
// 				</button>
// 				<ul>
// 					{this.props.todos.map(
// 						todo=>
// 							<li key={todo.id}>{todo.text}</li>
// 					)}
// 				</ul>
// 			</div>
// 		)
// 	}
// }
//
// const render = () => {
// 	ReactDOM.render(
// 		<TodoApp
// 			todos={store.getState().todos}/>,
// 		document.getElementById('root')
// 	)
// };
//
// store.subscribe(render);
// render();