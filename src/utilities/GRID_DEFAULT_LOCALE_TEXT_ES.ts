import { GridLocaleText } from '@mui/x-data-grid';

export const GRID_DEFAULT_LOCALE_TEXT_ES: GridLocaleText = {
  // Root
  noRowsLabel: 'No hay filas',
  noResultsOverlayLabel: 'No se encontraron resultados.',

  // Density selector toolbar button text
  toolbarDensity: 'Densidad',
  toolbarDensityLabel: 'Densidad',
  toolbarDensityCompact: 'Compacta',
  toolbarDensityStandard: 'Estándar',
  toolbarDensityComfortable: 'Cómoda',

  // Columns selector toolbar button text
  toolbarColumns: 'Columnas',
  toolbarColumnsLabel: 'Seleccionar columnas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Ocultar filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Buscar…',
  toolbarQuickFilterLabel: 'Buscar',
  toolbarQuickFilterDeleteIconLabel: 'Limpiar',

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Descargar como CSV',
  toolbarExportPrint: 'Imprimir',
  toolbarExportExcel: 'Descargar como Excel',

  // Columns management text
  columnsManagementSearchTitle: 'Buscar',
  columnsManagementNoColumns: 'No hay columnas',
  columnsManagementShowHideAllText: 'Mostrar/Ocultar todas',
  columnsManagementReset: 'Restablecer',

  // Filter panel text
  filterPanelAddFilter: 'Añadir filtro',
  filterPanelRemoveAll: 'Eliminar todos',
  filterPanelDeleteIconLabel: 'Eliminar',
  filterPanelLogicOperator: 'Operador lógico',
  filterPanelOperator: 'Operador',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  filterPanelColumns: 'Columnas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor del filtro',

  // Filter operators text
  filterOperatorContains: 'contiene',
  filterOperatorEquals: 'es igual a',
  filterOperatorStartsWith: 'empieza con',
  filterOperatorEndsWith: 'termina con',
  filterOperatorIs: 'es',
  filterOperatorNot: 'no es',
  filterOperatorAfter: 'es después de',
  filterOperatorOnOrAfter: 'es en o después de',
  filterOperatorBefore: 'es antes de',
  filterOperatorOnOrBefore: 'es en o antes de',
  filterOperatorIsEmpty: 'está vacío',
  filterOperatorIsNotEmpty: 'no está vacío',
  filterOperatorIsAnyOf: 'es cualquiera de',
  'filterOperator=': '=',
  'filterOperator!=': '!=',
  'filterOperator>': '>',
  'filterOperator>=': '>=',
  'filterOperator<': '<',
  'filterOperator<=': '<=',

  // Header filter operators text
  headerFilterOperatorContains: 'Contiene',
  headerFilterOperatorEquals: 'Es igual a',
  headerFilterOperatorStartsWith: 'Empieza con',
  headerFilterOperatorEndsWith: 'Termina con',
  headerFilterOperatorIs: 'Es',
  headerFilterOperatorNot: 'No es',
  headerFilterOperatorAfter: 'Es después de',
  headerFilterOperatorOnOrAfter: 'Es en o después de',
  headerFilterOperatorBefore: 'Es antes de',
  headerFilterOperatorOnOrBefore: 'Es en o antes de',
  headerFilterOperatorIsEmpty: 'Está vacío',
  headerFilterOperatorIsNotEmpty: 'No está vacío',
  headerFilterOperatorIsAnyOf: 'Es cualquiera de',
  'headerFilterOperator=': 'Es igual a',
  'headerFilterOperator!=': 'No es igual a',
  'headerFilterOperator>': 'Mayor que',
  'headerFilterOperator>=': 'Mayor o igual a',
  'headerFilterOperator<': 'Menor que',
  'headerFilterOperator<=': 'Menor o igual a',

  // Filter values text
  filterValueAny: 'cualquiera',
  filterValueTrue: 'verdadero',
  filterValueFalse: 'falso',

  // Column menu text
  columnMenuLabel: 'Menú',
  columnMenuShowColumns: 'Mostrar columnas',
  columnMenuManageColumns: 'Administrar columnas',
  columnMenuFilter: 'Filtrar',
  columnMenuHideColumn: 'Ocultar columna',
  columnMenuUnsort: 'Desordenar',
  columnMenuSortAsc: 'Ordenar por ASC',
  columnMenuSortDesc: 'Ordenar por DESC',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: 'Mostrar filtros',
  columnHeaderSortIconLabel: 'Ordenar',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} filas seleccionadas`
      : `${count.toLocaleString()} fila seleccionada`,

  // Total row amount footer text
  footerTotalRows: 'Total de filas:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Selección de casilla',
  checkboxSelectionSelectAllRows: 'Seleccionar todas las filas',
  checkboxSelectionUnselectAllRows: 'Deseleccionar todas las filas',
  checkboxSelectionSelectRow: 'Seleccionar fila',
  checkboxSelectionUnselectRow: 'Deseleccionar fila',

  // Boolean cell text
  booleanCellTrueLabel: 'sí',
  booleanCellFalseLabel: 'no',

  // Actions cell more text
  actionsCellMore: 'más',

  // Column pinning text
  pinToLeft: 'Fijar a la izquierda',
  pinToRight: 'Fijar a la derecha',
  unpin: 'Desfijar',

  // Tree Data
  treeDataGroupingHeaderName: 'Grupo',
  treeDataExpand: 'ver hijos',
  treeDataCollapse: 'ocultar hijos',

  // Grouping columns
  groupingColumnHeaderName: 'Grupo',
  groupColumn: (name) => `Agrupar por ${name}`,
  unGroupColumn: (name) => `Dejar de agrupar por ${name}`,

  // Master/detail
  detailPanelToggle: 'Alternar panel de detalles',
  expandDetailPanel: 'Expandir',
  collapseDetailPanel: 'Colapsar',

  // Used core components translation keys
  MuiTablePagination: {
    labelRowsPerPage: 'Filas por página:',
    labelDisplayedRows: ({ from, to, count }) =>
      `${from}–${to} de ${count !== -1 ? count : `más de ${to}`}`,
  },

  // Row reordering text
  rowReorderingHeaderName: 'Reordenar filas',

  // Aggregation
  aggregationMenuItemHeader: 'Agregación',
  aggregationFunctionLabelSum: 'suma',
  aggregationFunctionLabelAvg: 'promedio',
  aggregationFunctionLabelMin: 'mín',
  aggregationFunctionLabelMax: 'máx',
  aggregationFunctionLabelSize: 'tamaño',
};
