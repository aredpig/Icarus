//=============================================================================
// 插件: CustomizerTitle
// 文件: Siwu_CustomizerTitle.js
// 版本: 20190102
//=============================================================================
 /*:
 * @plugindesc 标题界面和命令自定义。
 * @author Siwu None
 *
 * @param NewText
 * @desc 更改名称
 * @default 新的故事
 *
 * @param LoadText
 * @desc 更改名称
 * @default 旅途再续
 *
 * @param OptionText
 * @desc 更改名称
 * @default 游戏设定
 *
 * @param DisplayExit
 * @desc 是否显示退出游戏? true/false
 * @default true
 *
 * @param ExitText
 * @desc 更改名称
 * @default 退出游戏
 *
 * @param MaxCols
 * @desc 单行命令的最大个数:(1~4)
 * @default 4
 *
 * @param WindowWidth
 * @desc 命令框的宽度。
 * @default 840
 *
 * @param X
 * @desc 命令框位置：X
 * 默认:(Graphics.boxWidth - this.width) / 2
 * @default (Graphics.boxWidth - this.width) / 2
 *
 * @param Y
 * @desc 命令框位置：Y
 * 默认:Graphics.boxHeight - this.height - 96
 * @default Graphics.boxHeight - this.height - 96
 *
 * @param WindowSkin
 * @desc Default is Window, it means the window skin
 * is the file img/system/Window.png.
 * @default Window
 *
 * @param Align
 * @desc left/center/right
 * @default center
 *
 * @param TextColor
 * @desc #000000-#FFFFFF or red blue green yellow etc.
 * @default yellow
 *
 * @help
 * Introduction
 * 这个插件可以自定义命令、标题界面。
 */

// Imported
var Imported = Imported || {};
Imported.Siwu_CustomizerTitle = true;

// Parameter Variables
var Objective_Siwu = Objective_Siwu || {};
Objective_Siwu.TitleMenuForParametersAndVariables = Objective_Siwu.TitleMenuForParametersAndVariables || {};
Objective_Siwu.TitleMenuForParametersAndVariables.Parameters = PluginManager.parameters('Siwu_CustomizerTitle');
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam = Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam || {};
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.NewText = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['NewText']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.LoadText = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['LoadText']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.OptionText = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['OptionText']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.DisplayExit = Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['DisplayExit'].toLowerCase() === 'true';
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.ExitText = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['ExitText']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.MaxCols = parseInt(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['MaxCols']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.WindowWidth = parseInt(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['WindowWidth']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.X = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['X']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.Y = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['Y']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.WindowSkin = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['WindowSkin']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.Align = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['Align']);
Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.TextColor = String(Objective_Siwu.TitleMenuForParametersAndVariables.Parameters['TextColor']);

// Main
// Window_TitleCommand
Objective_Siwu.TitleMenuForParametersAndVariables.Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.NewText, 'li_new');
    this.addCommand(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.LoadText, 'li_load', Window_TitleCommand.prototype.isContinueEnabled());
    this.addCommand(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.OptionText, 'li_options');
    if(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.DisplayExit){
        this.addCommand(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.ExitText, 'li_Exit');
    }
};

Window_TitleCommand.prototype.maxCols = function() {
    return Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.MaxCols;
};

Window_TitleCommand.prototype.windowWidth = function() {
    return Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.WindowWidth;
};

Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = eval(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.X);
    this.y = eval(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.Y);
};

Window_TitleCommand.prototype.loadWindowskin = function() {
this.windowskin = ImageManager.loadSystem(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.WindowSkin);
};

Window_TitleCommand.prototype.itemTextAlign = function() {
    return Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.Align;
};

Window_TitleCommand.prototype.resetTextColor = function() {
	this.changeTextColor(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.TextColor);
};

// Scene
Objective_Siwu.TitleMenuForParametersAndVariables.Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_TitleCommand();
    this._commandWindow.setHandler('li_new',  this.commandNewGame.bind(this));
    this._commandWindow.setHandler('li_load', this.commandContinue.bind(this));
    this._commandWindow.setHandler('li_options',  this.commandOptions.bind(this));
    if(Objective_Siwu.TitleMenuForParametersAndVariables.CustomizerTitleParam.DisplayExit){
        this._commandWindow.setHandler('li_Exit',  this.commandExit.bind(this));
    }
    this.addWindow(this._commandWindow);
};

Scene_Title.prototype.commandExit = function() {
    this._commandWindow.close();
    SceneManager.exit();
};
