import React, { Component } from 'react';

class Constructor extends Component {
    constructor() {
        super();
        console.log("called constructor");
    }
    render() {
        return (
            <div>
                <p>Constructor is a method which is invoked by default when objects are created in reactjs we are never creting an object of any class for then in reactjs constructor invoked by default when compoenent called</p>
                <p>
                    You rendered descendant Routes (or called `useRoutes()`) at "/example/classcompo" (under Route path="classcompo") but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

                    {/* Please change the parent <Route path="classcompo"> to <Route path="classcompo/*">. */}
                </p>
                
            </div>
        );
    }
}

export default Constructor;