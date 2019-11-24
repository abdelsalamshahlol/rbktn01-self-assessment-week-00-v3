// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];

/*
	== Notes ==
	- Function takes two params. An object and test function
	- Returns an Array with full names of family members
	- Use recursion
*/

/*
	== Pseudocode ==
	use for in loop 
	 if key eql to children
	  call the func itself
	 else run the test object
*/

var familyTree = {
    'firstName': 'Beth',
    'lastName': 'Johnson',
    'location': 'San Francisco',
    'children': [{
        'firstName': 'Beth Jr.',
        'lastName': 'Johnson',
        'location': 'Berkeley',
        'children': [{
            'firstName': 'Smitty',
            'lastName': 'Won',
            'location': 'Beijing',
            'children': []
        }]
    }, {
        'firstName': 'Joshie',
        'lastName': 'Wyattson',
        'location': 'Berkeley',
        'children': []
    }]
};

clear();

var livesInBerkeley = function(familyMember) {
    return familyMember.location === 'Berkeley';
}

var filterFamilyMembers = function(familyTree, check) {
    var result = [];

    if (check(familyTree)) {
        result.push(familyTree.firstName + " " + familyTree.lastName)
    }

    familyTree = familyTree.children.length > 0 ? familyTree.children : familyTree;

    console.log(familyTree)
    for (var key in familyTree) {
        if (check(familyTree[key])) {
            result.push(familyTree[key].firstName + " " + familyTree[key].lastName)
        }

    }

    return result;
}
