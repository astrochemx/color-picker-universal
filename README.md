# 🌌 Color Picker Universal 🌌

## 🌐 Links

[Website](https://jeronimoek.github.io/color-translate-web/)

[Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=JeronimoEkerdt.color-picker-universal)

[Open VSX Registry](https://open-vsx.org/extension/JeronimoEkerdt/color-picker-universal)

[Github Repository](https://github.com/jeronimoek/color-picker-universal)

## ✅ Features

Pick and translate between multiple color formats, in any file.

Formats supported: rgb/a, hex/a, hsl/a, hwb/a, cmyk/a, hex 0x, lab, lch, oklab, oklch, and named colors.

This extension can be used through its color pickers, commands, or context menu options.

![Demo](images/demo.gif)

## ⚙ Settings

To see settings press `CTRL + ,` OR `⌘ + ,`

| Id                                        | Description                                                   | Default | Available values                                                                                            | Example                                                                                                                 |
| ----------------------------------------- | ------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| color-picker-universal.disable            | Disables the extension                                        | false   | true false                                                                                                  | true                                                                                                                    |
| color-picker-universal.ignoreVariableName | If enabled, ignores colors in variables names                 | true    | true false                                                                                                  | false                                                                                                                   |
| color-picker-universal.preferLegacy       | If enabled, colors are displayed in legacy mode when possible | false   | true false                                                                                                  | true                                                                                                                    |
| color-picker-universal.languages          | Enabled language identifiers. Use "!" to exclude languages    | ["*"]   | [Default identifiers](https://code.visualstudio.com/docs/languages/identifiers#_known-language-identifiers) | ["*", "!css", "!less", "!sass", "!scss"]                                                                                |
| color-picker-universal.formatsFrom        | Enabled formats to translate from. Use "!" to exclude formats | ["*"]   | "\*" "device-cmyk" "hex" "hsl" "hwb" "named" "rgb" "hex0x" "lab" "lch" "oklab" "oklch" "a98"                | ["*", "!hex_0x", "!named"]                                                                                              |
| color-picker-universal.formatsTo          | Enabled formats to translate into. Use "!" to exclude formats | ["*"]   | "\*" "cmyk" "hex" "hsl" "hwb" "named" "rgb" "hex0x" "lab" "lch" "oklab" "oklch" "a98"                       | ["*", "!hex_0x", "!cmyk", "!hwb"]                                                                                       |
| color-picker-universal.maxDigits          | Max number of decimal digits                                  | 2       | <integer>                                                                                                   | 5                                                                                                                       |
| color-picker-universal.customRegexes      | Set custom regexes for given formats                          | {}      | See [Custom Regexes](#-custom-regexes)                                                                      | { "a98": ["my-a98\\((\\d+(?:\\.\\d+)?) \\$ (\\d+(?:\\.\\d+)?) \\$ (\\d+(?:\\.\\d+)?)(?: \\$ (\\d+(?:\\.\\d+)?))?\\)",]} |

## ✍ Commands

To see commands press `F1` and type `Color Picker Universal`

[//]: # "vscode-table-commands(title:Name|command:Command)"

| Name                               | Command                                |
| ---------------------------------- | -------------------------------------- |
| Translate colors to another format | color-picker-universal.translateColors |

## 🗨 Editor's context menu options

To see the editor's context menu options press `right click` inside a file content's editor

[//]: # "vscode-table-menus(title:Name|command:Command)"

| Name                               | Command                                |
| ---------------------------------- | -------------------------------------- |
| Translate colors to another format | color-picker-universal.translateColors |

## 🔧 Custom Regexes

This setting allows the user to create custom presentations for the given formats.

This takes an object with the following schema:

```
{
    <format>: [
        <regex>,
        <regex2>
    ],
    <format2>: [
        <regex3>
    ]
}
```

### Values

#### \<format\>

Is one of "formatsTo" ("cmyk", "hex", "hsl", "hwb", "named", "rgb", "hex0x", "lab", "lch", "oklab", "oklch", "a98")

#### \<regex\>

Is an escaped regex expression that matches the values of the color, and an optional alpha value (3 to 5 values, depending on the format).
The values MUST be in the same format as in the standard presentation (can't pass a percentage value into a property that would typically only accept decimals, otherwise there could be unexpected outcomes).

- Recommendation: test the standard presentations to check the allowed color properties of presentations

Here is a table with the standard presentations of each color format property (this follows closely the [W3C standards](https://www.w3.org/TR/css-color-4/))

| Color Format/s       | Property/ies        | Presentations                                                                | Examples                                           |
| -------------------- | ------------------- | ---------------------------------------------------------------------------- | -------------------------------------------------- |
| _ALL FORMATS_        | alpha (default = 1) | Number/String 0-1, String Percentage                                         | 0.5, '0.5', '50%'                                  |
| RGB                  | r, g, b             | Number/String 0-255, String Percentage                                       | 123, '123', '50%'                                  |
| A98                  | r, g, b             | Number/String 0-1                                                            | 0.5, '0.5'                                         |
| HSL, HWB, LCH, OKLCH | h                   | Number/String 0-360, String Percentage, String Grad, String Rad, String Turn | 180, '180', '50%', '200grad', '3.14rad', '0.5turn' |
| HSL                  | s, l                | Number/String 0-1, String Percentage                                         | 0.5, '0.5', '50%'                                  |
| HWB                  | w, b                | Number/String 0-1, String Percentage                                         | 0.5, '0.5', '50%'                                  |
| LAB, LCH             | l                   | Number/String 0-100, String Percentage                                       | 50, '50', '50%'                                    |
| LAB                  | a, b                | Number/String -125 - 125, String Percentage -100% - 100%                     | -62.5, '-62.5', '-50%'                             |
| LCH                  | c                   | Number/String 0-150, String Percentage                                       | 75, '75', '50%'                                    |
| OKLAB, OKLCH         | l                   | Number/String 0-1, String Percentage                                         | 0.5, '0.5', '50%'                                  |
| OKLAB                | a, b                | Number/String -0.4 - 0.4, String Percentage -100% - 100%                     | -0.2, '-0.2', '-50%'                               |
| OKLCH                | c                   | Number/String 0-0.4, String Percentage                                       | 0.2, '0.2', '50%'                                  |
| CMYK                 | c, m, y, k          | Number/String 0-1, String Percentage                                         | 0.5, '0.5', '50%'                                  |

Here is a rgb regex example where we match r, g, and b values, and an optional alpha. Note that it's missing percentage support.

```json
"my-rgb\\((\\d+(?:\\.\\d+)?) \\$ (\\d+(?:\\.\\d+)?) \\$ (\\d+(?:\\.\\d+)?)(?: \\$ (\\d+(?:\\.\\d+)?))?\\)"
```

#### Regex Tips:

- Double quotes (") and backslashes (\\) are escaped with a backslash (\\).
- The regex capture groups must only capture the required values, and the optional one (alpha) if desired
- https://regexper.com/ This website is a great way to visualize and tweak regexes. [Here](https://regexper.com/#my-rgb%5C%28%28%5Cd%2B%28%3F%3A%5C.%5Cd%2B%29%3F%29%20%5C%24%20%28%5Cd%2B%28%3F%3A%5C.%5Cd%2B%29%3F%29%20%5C%24%20%28%5Cd%2B%28%3F%3A%5C.%5Cd%2B%29%3F%29%28%3F%3A%20%5C%24%20%28%5Cd%2B%28%3F%3A%5C.%5Cd%2B%29%3F%29%29%3F%5C%29) is the regex above visualized there. Note that **escape backslashes (\\) MUST be removed** when entering the regex there

## 🐞 Known Issues

[#68](https://github.com/jeronimoek/color-picker-universal/issues/68) When working with **css**, **less**, **sass**, and **scss** files, the color picker is duplicated due to the default Vscode color picker. Currently, the only workaround is excluding these file extensions in the `color-picker-universal.languages` setting (see example value above)

![Duplicated picker in css file](images/css-duplication.png)
