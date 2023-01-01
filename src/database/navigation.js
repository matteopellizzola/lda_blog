function Navigation(name, navigateTo) {
  this.name = name;
  this.navigateTo = navigateTo;
  //this.closed = closed ? true : false;
}

function NavigationList() {
  this.navigationList = [];

  this.add = (nav) => {
    this.navigationList.push(nav);
  };
}

export {Navigation, NavigationList};
