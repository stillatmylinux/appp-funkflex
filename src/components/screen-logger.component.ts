import {Component, ErrorHandler} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

/*
Author: Jonah Elbaz
Author Email: Jonahelbaz96@gmail.com
Date of Creation: April 13 2019
*/

export class ScreenLoggerComponent extends ErrorHandler {
    public errors: Array<{ type: string, error: any }> = [];
    public hidden = false;
    constructor() {
        super();
        this.takeOverConsole();
    }

    takeOverConsole() {
        const original = window.console;
        // @ts-ignore
        window.console = {
            log: data => {
                const elem = document.getElementById('ion-router-outlet');
                if (elem) {
                    this.updateLogger('none', data, elem);
                    // @ts-ignore
                    original.log.apply(original, arguments);
                }
            }
            , warn: data => {
                const elem = document.getElementById('ion-router-outlet');
                if (elem) {
                    this.updateLogger('none', data, elem);
                    // @ts-ignore
                    original.log.apply(original, arguments);
                }
            }
            , error: data => {
                const elem = document.getElementById('ion-router-outlet');
                if (elem) {
                    this.updateLogger('type', data, elem);
                    // @ts-ignore
                    original.log.apply(original, arguments);
                }
            }
        };
    }

    handleError(error) {
        const elem = document.getElementById('nav');
        if (elem) {
            let type = 'none';
            if (error instanceof HttpErrorResponse) {
                type = 'http';
            } else if (error instanceof TypeError) {
                type = 'type';
            } else {
                type = 'none';
            }
            this.updateLogger(type, error, elem);
        }
    }

    updateLogger(type: string, error: any, elem: HTMLElement) {
        if (this.hidden) {
            return;
        }
        this.errors.unshift({
            type: type,
            error: error
        });
        this.validateExistingErrorList();
        const elem2 = this.getHtmlElemt();
        elem.appendChild(elem2);
        this.waitOnClearClick();
        this.updateListStyles();
    }

    validateExistingErrorList() {
        const list = document.getElementById('error-list-div');
        if (list) {
            list.remove();
        }
    }

    getHtmlElemt(): HTMLElement {
        let items = '';
        this.errors.forEach(err => {
            const bckgrndC = this.getBackgroundColor(err.type);
            const color = err.type === 'none' ? '#000000' : '#ffffff';
            items += '<ion-item id="error-item" style="min-height:30px;height:auto;width:100%;--padding-start:0">\n' +
                '<ion-label style="white-space:normal;word-break:break-word;line-height:22px;padding-top:5px;padding-bottom:5px;margin:0;height:100%;width:100%;color:' + color + ';display:flex;align-items:center;padding-left:20px; background-color: ' + bckgrndC + '">\n' +
                err.error +
                '</ion-label>\n' +
                '</ion-item>';
        });
        const div = document.createElement('div');
        div.setAttribute('id', 'error-list-div');
        div.style.position = 'absolute';
        div.style.zIndex = '1000000000000000000';
        div.style.maxHeight = '25%';
        div.style.minHeight = '0';
        div.style.bottom = '0';
        div.style.height = 'auto';
        div.style.width = '100%';
        div.style.overflow = 'scroll';
        div.innerHTML = '<span style="font-size:10px;padding-left: 20px;">Top => Bottom</span>' +
            '<button id="clear-btn" style="float:right;margin-right:20px;background:rgba(0,0,0,0.2);border-radius:10px;height:20px;color:white">Clear</button>' +
            '<button id="hide-btn" style="float:right;margin-right:20px;background:rgba(0,0,0,0.2);border-radius:10px;height:20px;color:white">Hide for Build</button>' +
            '<ion-list id="error-log-list">' + items + '</ion-list>';
        return div;
    }

    waitOnClearClick() {
        const btn = document.getElementById('clear-btn');
        const btn2 = document.getElementById('hide-btn');
        if (btn) {
            btn.onclick = () => {
                this.errors = [];
                this.validateExistingErrorList();
            };
        }
        if (btn2) {
            btn2.onclick = () => {
                this.errors = [];
                this.validateExistingErrorList();
                this.hidden = true;
            };
        }
    }

    updateListStyles() {
        const list = document.getElementById('error-log-list');
        list.style.height = '100%';
        list.style.width = '100%';
        list.style.padding = '0';
        list.style.overflow = 'scroll';
    }

    getBackgroundColor(type: string): string {
        switch (type) {
            case 'http':
                return 'rgba(255, 69, 69, 0.63)';
            case 'type':
                return 'rgba(255, 69, 69, 0.63)';
            default:
                return 'rgba(240, 255, 69, 0.63)';
        }
    }
}
