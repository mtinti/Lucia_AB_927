let X1='log_AveExpr';
let Y1='logFC';
let X2='logFC';
let Y2='FDR';

let Y_LABEL_SCATTER1 = 'logFC';
let X_LABEL_SCATTER1 = '-AveExpr';

let Y_LABEL_SCATTER2 = '-logPval';
let X_LABEL_SCATTER2 = 'logFC';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='TREU927 AvsB TMT10plex';
let TAB_TITLE='TREU927 AvsB TMT10plex'

let _margin_1 = 0;
let _margin_2 = 0;

let _border_1_x = 0;
let _border_1_y = 0;

let _border_2_x = 0;
let _border_2_y = 0;

let BOX_PLOT_COLS_1 = ['A1', 'A2', 'A3', 'A4', 'A5']
let BOX_PLOT_COLS_2 = ['B1', 'B2', 'B3', 'B4', 'B5']

//need to manually change conditions in
//xs table (index.html) and scatter plot app (app.js)
let CONDITION_1 = 'A'
let CONDITION_2 = 'B'


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'TMT Intensity';

let File_1 = 'indata_927.csv';
let File_2 = 'indata2_927.csv';


//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','logFC','log_AveExpr','FDR','Desc'];