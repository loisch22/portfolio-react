import React from 'react';

//Create form that displays content to About content portion
export default class EditForm extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input type="text" 
                      placeholder="About content" 
                      autofocus
                    />
                    <button>Update Change</button>
                </form>
            </div>
        );
    }
}