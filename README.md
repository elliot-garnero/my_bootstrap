## My Bootstrap clone

This project was about recoding some basic Bootstrap. It made me use a CSS framework (SASS) and some Jquery for the functionnalities.

## Motivation

This project is very usefull to consolidate HTML/CSS knowledge and to start manipulate certain elements of the DOM in jquery.

## Tech/framework used

Built with :

- [HTML]
- [CSS]
- [SASS]
- [Jquery]

## Features

Grid system, buttons, manage img, colors, alerts.
Hide certain elements, on big screens, on mobile, on printing.
Navigation bars and menus, modals, tabs and tooltips.

## How to use it ?

Commands : just link the .css and .js files and add the classes in your HTML !

Grid : To display your elements in the center of your page and simply manage their positioning add a class 'container' to your div (row to have it inline) and use col-[i](out of 12) to choose the amount of space you want your column to take.

Buttons : To make any element a button just add 'btn' class. You can change the color with btn-[color], the size with btn-[size]. You can disable them with the btn-[disabled].

Img : You can change image properties easily using img-[responsive] to make them cross-platform displayable, img-[rounded] and img-[circle] to cut a bit on the border or make a circle or even blur it with img-[blur] !

Colors : Changing colors is easy with this framework, for text use text-[color], you can even get a custom background with bg-[color].

Alerts : A set of predefined alerts is furnished for your forms validations etc ... It's simple just call the 'alert' class with the special parameter and you're good to go (alert-[success] for a beautiful green alert).

Visibility : You can easily choose which elements you want to diplay compared to which device the user's choosing. Add the [device]-[visibility] class to the element you want to display and you're good to go, you can even do it before printing !

Navigation : Tired of having to do all the CSS for menus, just use 'navbar' class, with 'dropdown-menu' class you can even have a dropdown easily.

Poppins : To display a modal in the foreground use the 'modal' class and 'modal-content' for the text you want to display inside it. The modal can be closed with echap, close button or a simple click on the page.

Tabs : If you like to have a tab navigation system please use 'tab-content' for the containing div, then 'tab-list' for the ul list of your elements. For each li element add 'tab-data-target' and active on the one you want to be displayed as default. Then call the div containing the tab content 'tab-pane', don't forget the id of each div that must be the same than the tab's value.

Tooltip : The 'tooltip' class added to 'tooltip-content' helps you display a helpbox next to your element. You can choose the box position with 'tooltip-content-[position]'.

# Installation

Just pull the files and add classes in the HTML !

[Elliot](https://www.linkedin.com/in/elliot-garnero/)
