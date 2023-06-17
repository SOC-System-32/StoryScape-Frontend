//this is our main component for the upload form

import './uploadForm.css'
import VideoUpload from './videoUpload/videoUpload'
import ImageUpload from './imageUpload/imageUpload'
import TextUpload from './textUpload/textUpload'
//import the location input component
import AudioUpload from './audioUpload/audioUpload'
import StoryUpload from './StoryUpload/StoryUpload'
import DatePickerComponent from './datePicker/datePickerForm'
import LocationInput from './locationInput/locationInput'

function UploadForm() {

  return (
    <div className='user-upload-container'>
    <h2>Upload Form</h2>
    <VideoUpload />
    <ImageUpload />
    <TextUpload />
    <LocationInput />
    <AudioUpload />
    <StoryUpload/>
    <DatePickerComponent />
    <input className="btn btn-primary" type="submit" value="Submit" />
    </div>
  )
}

export default UploadForm



