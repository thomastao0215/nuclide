'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import type {CommandsType} from '../types/CommandsType';
import type {Gadget, GadgetsService} from '../../gadgets-interfaces';

import {Disposable} from 'atom';

function createGadgetsService(commands: CommandsType): GadgetsService {
  return {

    destroyGadget(gadgetId: string): void {
      commands.destroyGadget(gadgetId);
    },

    registerGadget(gadget: Gadget): Disposable {
      commands.registerGadget(gadget);
      return new Disposable(() => {
        commands.unregisterGadget(gadget.gadgetId);
      });
    },

    showGadget(gadgetId: string): void {
      commands.showGadget(gadgetId);
    },

  };
}

module.exports = createGadgetsService;
