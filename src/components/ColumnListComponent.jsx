import PropTypes from 'prop-types'

const ColumnListComponent = ({
	columns,
	handleRenameColumn,
	handleDeleteColumn,
	setShowModal,
}) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<h5>Список колонок</h5>
			</div>
			<div className='card-body'>
				<ul className='list-group'>
					{columns.map(col => (
						<li
							className='list-group-item d-flex justify-content-between align-items-center'
							key={col.dataField}
						>
							<span className='text-truncate'>{col.caption}</span>
							<div>
								<button
									className='btn btn-sm btn-warning'
									style={{ marginRight: '10px' }}
									onClick={() =>
										handleRenameColumn(
											col.dataField,
											prompt('Введите новое имя колонки', col.caption)
										)
									}
								>
									<i className='fas fa-edit'></i>
								</button>
								<button
									className='btn btn-sm btn-danger'
									onClick={() => handleDeleteColumn(col.dataField)}
								>
									<i className='fas fa-trash'></i>
								</button>
							</div>
						</li>
					))}
				</ul>
				<button
					className='btn btn-primary mt-3'
					onClick={() => setShowModal(true)}
				>
					Добавить колонку
				</button>
			</div>
		</div>
	)
}

ColumnListComponent.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			dataField: PropTypes.string.isRequired,
			caption: PropTypes.string.isRequired,
			format: PropTypes.string,
			dataType: PropTypes.string.isRequired,
			alignment: PropTypes.string.isRequired,
		})
	).isRequired,
	handleRenameColumn: PropTypes.func.isRequired,
	handleDeleteColumn: PropTypes.func.isRequired,
	setShowModal: PropTypes.func.isRequired,
}

export default ColumnListComponent
