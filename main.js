
/// <reference path="ScreepsAutocomplete-master/ConstructionSite.js" /> 
/// <reference path="ScreepsAutocomplete-master/Creep.js" /> 
/// <reference path="ScreepsAutocomplete-master/Flag.js" /> 
/// <reference path="ScreepsAutocomplete-master/Memory.js" /> 
/// <reference path="ScreepsAutocomplete-master/Mineral.js" /> 
/// <reference path="ScreepsAutocomplete-master/Nuke.js" /> 
/// <reference path="ScreepsAutocomplete-master/OwnedStructure.js" /> 
/// <reference path="ScreepsAutocomplete-master/PathFinder.js" /> 
/// <reference path="ScreepsAutocomplete-master/RawMemory.js" /> 
/// <reference path="ScreepsAutocomplete-master/Resource.js" /> 
/// <reference path="ScreepsAutocomplete-master/Room.js" /> 
/// <reference path="ScreepsAutocomplete-master/RoomObject.js" /> 
/// <reference path="ScreepsAutocomplete-master/RoomPosition.js" /> 
/// <reference path="ScreepsAutocomplete-master/Source.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structure.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureLab.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureLink.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureNuker.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureObserver.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructurePortal.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructurePowerBank.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureRampart.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureRoad.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureSpawn.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureStorage.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureTerminal.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureTower.js" /> 
/// <reference path="ScreepsAutocomplete-master/Structures/StructureWall.js" />
/// <reference path="ScreepsAutocomplete-master/Global/Constants.js" /> 
/// <reference path="ScreepsAutocomplete-master/Game.js" /> 



var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function (){

        for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);

    if(harvesters.length < 3) {
        var newName = Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
        console.log('Spawning new harvester: ' + newName);
    }


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}