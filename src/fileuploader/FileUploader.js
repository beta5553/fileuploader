import React, {Component} from 'react'
import { withAuthenticator } from 'aws-amplify-react' 
import './FileUploader'

class FileUploader extends Component {

    render () {
        return (
            <div>
                <h1>FileUploader component. </h1>
                <form method="post" >
                <input type="file" />
                <input type="submit" />
                </form>
            </div>
        )

    }
}

export default withAuthenticator (FileUploader, {
    includesGreetings: true
})
