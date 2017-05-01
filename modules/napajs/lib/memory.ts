export * from './memory/allocator';
export * from './memory/barrel';
export * from './memory/handle';
export * from './memory/shareable';

import { Allocator, AllocatorDebugger } from './memory/allocator';

var addon = require('../bin/addon');

/// <summary> Export Crt allocator from napa.dll. </summary>
export let CrtAllocator: Allocator = addon.getCrtAllocator();

/// <summary> Export default allocator from napa.dll. </summary>
export let DefaultAllocator: Allocator = addon.getDefaultAllocator();

/// <summary> Create a debug allocator around allocator. </summary>
/// <param name="allocator"> User allocator. </param>
export function debugAllocator(allocator: Allocator): AllocatorDebugger {
    return new addon.SimpleAllocatorDebuggerWrap(allocator);
}