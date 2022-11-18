const checkRobotDirection = (currRbtDir, order) => {
  if (
    (currRbtDir == 'N' && order == 'D') ||
    (currRbtDir == 'S' && order == 'E')
  ) {
    return 'L'
  } else if (
    (currRbtDir == 'N' && order == 'E') ||
    (currRbtDir == 'S' && order == 'D')
  ) {
    return 'O'
  } else if (
    (currRbtDir == 'L' && order == 'D') ||
    (currRbtDir == 'O' && order == 'E')
  ) {
    return 'S'
  } else if (
    (currRbtDir == 'L' && order == 'E') ||
    (currRbtDir == 'O' && order == 'D')
  ) {
    return 'N'
  } else {
    return currRbtDir
  }
}

const moveRobot = (currRbtDir, order) => {
  if (
    (currRbtDir === 'N' && order == 'F') ||
    (currRbtDir == 'S' && order == 'T')
  ) {
    if (yRobot >= yAmb) {
      return (yRobot = yAmb)
    } else {
      return yRobot++
    }
  } else if (
    (currRbtDir === 'N' && order == 'T') ||
    (currRbtDir == 'S' && order == 'F')
  ) {
    if (yRobot <= 0) {
      return (yRobot = 0)
    } else {
      return yRobot--
    }
  } else if (
    (currRbtDir == 'L' && order == 'F') ||
    (currRbtDir == 'O' && order == 'T')
  ) {
    if (xRobot >= xAmb) {
      return (xRobot = xAmb)
    } else {
      return xRobot++
    }
  } else if (
    (currRbtDir == 'O' && order == 'F') ||
    (currRbtDir == 'L' && order == 'T')
  ) {
    if (xRobot <= 0) {
      return (xRobot = 0)
    } else {
      return xRobot--
    }
  }
}

const input = require('fs').readFileSync('stdin', 'utf8')
const lines = input.split('\n')

// tamanho do ambiente
const length = lines.shift().split(' ')
const xAmb = +length.shift()
const yAmb = +length.shift()

// deslocamento do robô
let robotDirection = 'N'
let xRobot = 0
let yRobot = 0
let displacement = ''
for (let i = 0; i < lines.length; i++) {
  displacement = displacement + lines[i]
}

for (i = 0; i < displacement.length; i++) {
  robotDirection = checkRobotDirection(robotDirection, displacement[i])
  moveRobot(robotDirection, displacement[i])
}

console.log(robotDirection, xRobot, yRobot)
