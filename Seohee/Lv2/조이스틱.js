function getRight(number, cursor) {
    let right_count = 0, check_right = true;


    for (let i = cursor; i < number.length; i++) {
        if (number[i] != 1000) {
            check_right = false;
            break;
        }
        right_count++;

    }
    if (check_right) {
        for (let i = 0; i < cursor; i++) {
            if (number[i] != 1000) {
                break;
            }
            right_count++;

        }
    }


    return right_count;
}

function getLeft(number, cursor) {
    let left_count = 0, check_left = true;


    for (let i = cursor; i >= 0; i--) {
        if (number[i] != 1000) {
            check_left = false;
            break;
        }
        left_count++;
    }
    if (check_left) {
        for (let i = number.length - 1; i > cursor; i--) {
            if (number[i] != 1000) {
                break;
            }
            left_count++;
        }
    }


    return left_count;
}

function solution(name) {
    let index = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = [];
    index = index.split('');
    name.split('').map((alpha) => {
        let num = index.indexOf(alpha) < 13 ? index.indexOf(alpha) : 26 - index.indexOf(alpha);
        if (num === 0)
            num = 1000;
        number.push(num)

    })


    let cursor = 0, distance = 0;

    while (Math.min(...number) != 1000) {
        console.log(number);
        console.log(cursor + ' 거리 -> ' + distance);

        let right_gap = getRight(number, cursor);
        let left_gap = getLeft(number, cursor);

        console.log(right_gap + ' : ' + left_gap);
        console.log();

        let position = 0;
        if (left_gap < right_gap) {
            position = cursor - left_gap < 0 ? number.length + cursor - left_gap : cursor - left_gap;
            distance += left_gap;

        } else {
            position = cursor + right_gap >= number.length ? (cursor + right_gap) % number.length :
                cursor + right_gap;
            distance += right_gap;

        }
        distance += number[position]
        number[position] = 1000;
        cursor = position;
    }
    return distance;
}