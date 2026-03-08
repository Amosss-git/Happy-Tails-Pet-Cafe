export function logActivity(action, item) {

    const history = JSON.parse(localStorage.getItem("activityHistory")) || [];
  
    history.push({
      action: action,
      item: item,
      time: new Date().toLocaleString()
    });
  
    localStorage.setItem("activityHistory", JSON.stringify(history));
  }