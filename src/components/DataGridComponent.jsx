import DataGrid, { Column } from 'devextreme-react/data-grid'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import PropTypes from 'prop-types'
import { data } from '../../api/data'
import './DataGrid.css'

const DataGridComponent = ({ columns }) => {
	return (
		<div className='card'>
			<div className='card-header'>
				<h5>Окно предварительного просмотра отчёта</h5>
			</div>
			<div className='card-body overflow-auto data-grid-container'>
				<DataGrid
					id='gridContainer'
					dataSource={data}
					keyExpr={data.ID}
					allowColumnReordering={true}
					allowColumnResizing={true}
					columnAutoWidth={true}
					showBorders={true}
					scrolling={{ mode: 'virtual' }}
				>
					{columns.map(col => (
						<Column
							key={col.dataField}
							dataField={col.dataField}
							caption={col.caption}
							dataType={col.dataType}
							format={col.format}
							alignment={col.alignment}
							width='150px'
							cssClass='data-grid-column'
						/>
					))}
				</DataGrid>
			</div>
		</div>
	)
}

DataGridComponent.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			dataField: PropTypes.string.isRequired,
			caption: PropTypes.string.isRequired,
			format: PropTypes.string,
			dataType: PropTypes.string.isRequired,
			alignment: PropTypes.string.isRequired,
		})
	).isRequired,
}

export default DataGridComponent
