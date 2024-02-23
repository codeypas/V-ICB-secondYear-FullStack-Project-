import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <TextInput type='text' placeholder='Title' required id='title' className='flex-1'/>

                <Select>
                    <option value="one">Select</option>
                    <option value="photo">Photo</option>
                    <option value="pdf">PDF</option>
                    <option value="ppt">PPT</option>
                </Select>
            </div>
            <div className="flex gap-4 items-center justify-between border-4 border-blue-500 border-dotted p-3">
                <FileInput type='file' accept=""/>
                <Button type="button" color='blue' size='sm' outline>Upload File</Button>
            </div>
            <ReactQuill theme="snow" placeholder="Describe Post" className="h-72 mb-12"/>

            <Button type="submit" color='blue'>Publish</Button>
        </form>
    </div>
  )
}
