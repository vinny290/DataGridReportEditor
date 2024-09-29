import PropTypes from 'prop-types'

const ModalComponent = ({
	showModal,
	setShowModal,
	newColumn,
	handleInputChange,
	handleAddColumn,
}) => {
	return (
		showModal && (
			<div className='modal d-block' tabIndex='-1'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>Добавить новую колонку</h5>
							<button
								type='button'
								className='btn-close'
								onClick={() => setShowModal(false)}
							></button>
						</div>
						<div className='modal-body'>
							<form>
								<div className='mb-3'>
									<label className='form-label'>Data Field</label>
									<input
										type='text'
										className='form-control'
										name='dataField'
										value={newColumn.dataField}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className='mb-3'>
									<label className='form-label'>Caption</label>
									<input
										type='text'
										className='form-control'
										name='caption'
										value={newColumn.caption}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div className='mb-3'>
									<label className='form-label'>Format</label>
									<input
										type='text'
										className='form-control'
										name='format'
										value={newColumn.format}
										onChange={handleInputChange}
									/>
								</div>
								<div className='mb-3'>
									<label className='form-label'>Data Type</label>
									<select
										className='form-select'
										name='dataType'
										value={newColumn.dataType}
										onChange={handleInputChange}
									>
										<option value='string'>String</option>
										<option value='number'>Number</option>
										<option value='date'>Date</option>
										<option value='datetime'>Datetime</option>
										<option value='boolean'>Boolean</option>
									</select>
								</div>
								<div className='mb-3'>
									<label className='form-label'>Alignment</label>
									<select
										className='form-select'
										name='alignment'
										value={newColumn.alignment}
										onChange={handleInputChange}
									>
										<option value='left'>Left</option>
										<option value='center'>Center</option>
										<option value='right'>Right</option>
									</select>
								</div>
							</form>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								onClick={() => setShowModal(false)}
							>
								Отмена
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={handleAddColumn}
								disabled={!newColumn.dataField || !newColumn.caption}
							>
								Добавить
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	)
}

ModalComponent.propTypes = {
	showModal: PropTypes.bool.isRequired,
	setShowModal: PropTypes.func.isRequired,
	newColumn: PropTypes.shape({
		dataField: PropTypes.string.isRequired,
		caption: PropTypes.string.isRequired,
		format: PropTypes.string,
		dataType: PropTypes.string.isRequired,
		alignment: PropTypes.string.isRequired,
	}).isRequired,
	handleInputChange: PropTypes.func.isRequired,
	handleAddColumn: PropTypes.func.isRequired,
}

export default ModalComponent
