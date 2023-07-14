import { useForm } from "react-hook-form"

const TaskForm = () => {

    const { register, handleSubmit} = useForm();

    return (
        <div> 
            <h3> Add Task </h3>
            <form>
                <div>
                    <input type="text" name="tarea"/>
                </div>
                <div>
                    <label> Description </label>
                    <input type="text" name="tarea"/>
                </div>
            </form>
        </div>
    )
}