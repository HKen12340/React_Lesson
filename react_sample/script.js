
    let counter = 0;
    let dom = document.querySelector('#root');
    doCount();

    function doCount(){
      counter++;
      let element = React.createElement(
      'div',{},[
        React.createElement(
        'p',{},'count:'+counter
        ),
        React.createElement(
        'h2',{},"Hello!"
        ),
        React.createElement(
          'h4',{className:'alert alert-primary'},
          "React sample page."
        ),React.createElement('ul',{},[
            React.createElement(
              'li',{class:'list-group'}
            ),
            React.createElement(
              'li',{class:'list-group-item'},"Frist item."
            ),
            React.createElement(
              'li',{class:'list-group-item'},"Second item."
            ),
            React.createElement(
              'li',{class:'list-group-item'},"Third item."
            )
        ])
      ])

        ReactDOM.render(element,dom)
    }
