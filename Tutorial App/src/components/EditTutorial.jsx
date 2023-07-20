import axios from 'axios'
import React, { useState } from 'react'

const EditTutorial = ({ editItem, setEditItem, getTutorials }) => {

    const base_url = "https://tutorial-api.fullstack.clarusway.com/tutorials"

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${base_url}/${editItem.id}/`, editItem)
        } catch (error) {
            console.log(error);
        }
        getTutorials()
    }



    return (
        <div className="modal fade" id="open-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    placeholder="Enter your title"
                                    value={editItem?.title}
                                    onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="desc" className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desc"
                                    placeholder="Enter your Description"
                                    value={editItem?.description}
                                    onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-danger mb-4">
                                Submit
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditTutorial