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
    var arr = Object.values(familyTree);
    var result = [];

    function processArr(arr) {
        if (arr.length === 0) {
            return result;
        }
        //        console.log(arr[0], Object.assign({},arr[0]))
        //        if(check){
        console.log(arr[0])
        if (Array.isArray(arr[0])) {
            console.log(arr[0])
            result.push(processArr(arr[0]))
        } else {
            if (check(arr[0])) {
                var fullname = arr[0][1] + arr[0][2]
                result.push(fullname)
            }
        }

        return processArr(arr.slice(1));

    }

    //     console.log(arr)

    return processArr(arr)
}

console.log(filterFamilyMembers(familyTree, livesInBerkeley))
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];


