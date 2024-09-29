import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { reportConfig } from '../../api/report-config'
import ColumnListComponent from './ColumnListComponent'
import DataGridComponent from './DataGridComponent'
import ModalComponent from './ModalComponent'

const DataGridReportEditor = () => {
	const [columns, setColumns] = useState(reportConfig.columns)
	const [newColumn, setNewColumn] = useState({
		dataField: '',
		caption: '',
		format: '',
		dataType: 'string',
		alignment: 'left',
	})
	const [showModal, setShowModal] = useState(false)

	const handleDeleteColumn = dataField => {
		setColumns(columns.filter(col => col.dataField !== dataField))
	}

	const handleRenameColumn = (dataField, newCaption) => {
		setColumns(
			columns.map(col =>
				col.dataField === dataField ? { ...col, caption: newCaption } : col
			)
		)
	}

	const handleAddColumn = () => {
		setColumns([...columns, newColumn])
		setShowModal(false)
		setNewColumn({
			dataField: '',
			caption: '',
			format: '',
			dataType: 'string',
			alignment: 'left',
		})
	}

	const handleInputChange = e => {
		const { name, value } = e.target
		setNewColumn(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<div className='container mt-4'>
			<div className='row'>
				<div className='col-md-8 mr-md-2'>
					<DataGridComponent columns={columns} />
				</div>
				<div className='col-md-4 ml-md-2'>
					<ColumnListComponent
						columns={columns}
						handleRenameColumn={handleRenameColumn}
						handleDeleteColumn={handleDeleteColumn}
						setShowModal={setShowModal}
					/>
				</div>
			</div>
			<ModalComponent
				showModal={showModal}
				setShowModal={setShowModal}
				newColumn={newColumn}
				handleInputChange={handleInputChange}
				handleAddColumn={handleAddColumn}
			/>
		</div>
	)
}

export default DataGridReportEditor
