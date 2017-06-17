import defaultAppSettings from '../data/defaultAppSettings';

const storeItem = (itemType, item) => {
  localStorage.setItem(itemType, JSON.stringify(item));
};

const getItem = itemType => JSON.parse(localStorage.getItem(itemType));

const imitateApiDelay = contentToServe => new Promise((resolve) => {
  setTimeout(() => resolve(contentToServe), 500);
});

export default {
  updateAppSettings(appSettings) {
    storeItem('appSettings', appSettings);
    return imitateApiDelay(appSettings);
  },
  getAppSettings() {
    const appSettings = getItem('appSettings') || defaultAppSettings;
    return imitateApiDelay(appSettings);
  },
  getAppTodos() {
    const appTodos = getItem('appTodos') || [];
    return imitateApiDelay(appTodos);
  },
  getAppTodoById(id) {
    const appTodos = getItem('appTodos') || [];

    const todoById = appTodos.find(todo => todo.id === id);

    return imitateApiDelay({
      success: true,
      todo: todoById
    });
  },
  addAppTodo(title) {
    const appTodos = getItem('appTodos') || [];

    const largestId = appTodos.length ? appTodos
      .map(todo => todo.id)
      .sort((a, b) => {
        const indicator = a > b;
        return indicator ? -1 : 1;
      })[0] : 0;

    appTodos.push({
      id: largestId + 1,
      title,
      completed: false
    });

    storeItem('appTodos', appTodos);

    return imitateApiDelay(largestId + 1);
  },
  removeAppTodo(id) {
    const appTodos = getItem('appTodos') || [];

    const filteredTodos = appTodos.filter(todo => todo.id !== id);

    storeItem('appTodos', filteredTodos);

    return imitateApiDelay({ success: true });
  },
  toggleAppTodo(id) {
    const appTodos = getItem('appTodos') || [];

    const toggledTodos = appTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    storeItem('appTodos', toggledTodos);

    return imitateApiDelay({ success: true });
  },
  editAppTodo(id, title) {
    const appTodos = getItem('appTodos') || [];

    const toggledTodos = appTodos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        };
      }
      return todo;
    });

    storeItem('appTodos', toggledTodos);

    return imitateApiDelay({ success: true });
  }
};
