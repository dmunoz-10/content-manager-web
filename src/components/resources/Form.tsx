import { FC, useState, ChangeEvent } from "react"
import { ResourceDataForm, ResourceData } from "@/types"

type FormProps = {
  type: 'new' | 'edit'
  initalData?: ResourceDataForm | ResourceData
  onSubmit: (form: ResourceDataForm | ResourceData) => void
}

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "2",
  timeToFinish: "60",
}

const ResourcesForm: FC<FormProps> = ({ type, initalData = DEFAULT_DATA, onSubmit }) => {
  const [form, setForm] = useState(initalData)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const resetForm = () => setForm(initalData)

  return (
    <div className="resource-form">
      <h1 className="title">{type === 'new' ? 'Add New' : 'Edit'} Resource</h1>

      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Learn Next JS and Sanity IO"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Learn these technologies because they are very popular and enable better SEO"
            >
            </textarea>
          </div>
        </div>

        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="https://academy.eincode.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>

        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="timeToFinish"
              value={form.timeToFinish}
              onChange={handleChange}
              placeholder="60"
            />
            <p className="help">Time in minutes</p>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" type="button" onClick={() => onSubmit(form)}>Submit</button>
          </div>

          <div className="control">
            <button className="button is-link is-light" onClick={resetForm}>Reset Form</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ResourcesForm
