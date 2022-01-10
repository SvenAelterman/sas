import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import CancelIcon from '@mui/icons-material/CancelOutlined'
import SaveIcon from '@mui/icons-material/SaveOutlined'
import './DirectoryEditor.css'

const DirectoryEditor = ({ data, onCancel, onCreate, open, title }) => {
    const [formData, setFormData] = useState({})

    // Set the default form values
    useEffect(() => {
        setFormData({
            name: data.name ? data.name : '',
            fundCode: data.fundCode ? data.fundCode : ''
        })

    }, [data])


    const handleCreateClick = () => {
        onCreate && onCreate(formData)
    }


    const handleClose = () => {
        onCancel && onCancel()
    }


    const handleInputChange = (event) => {
        updateState(event.target.name, event.target.value)
    }


    const updateState = (id, value) => {
        setFormData({
            ...formData,
            [id]: value
        })
    }


    return (
        <Dialog onClose={handleClose} open={open} >
            <DialogTitle>{title}</DialogTitle>

            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoFocus
                            id='name'
                            name='name'
                            label="Space's Name"
                            fullWidth
                            variant='standard'
                            defaultValue={data.name}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id='fundCode'
                            name='fundCode'
                            label='Fund code'
                            fullWidth
                            variant='standard'
                            defaultValue={data.fundCode}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button variant='outlined' startIcon={<CancelIcon />} onClick={handleClose}>Cancel</Button>
                <Button variant='contained' startIcon={<SaveIcon />} onClick={handleCreateClick}>Create</Button>
            </DialogActions>
        </Dialog>
    )
}

DirectoryEditor.propTypes = {
    data: PropTypes.object,
    onCancel: PropTypes.func,
    onCreate: PropTypes.func,
    onUpdate: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string
}

DirectoryEditor.defaultProps = {
    data: {},
    open: false,
    title: 'Creating a new folder'
}

export default DirectoryEditor
