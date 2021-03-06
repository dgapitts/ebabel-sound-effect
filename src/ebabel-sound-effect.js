'use strict';

/**
 * `ebabelSoundEffect`
 * Attach a sound effect to a 3D mesh, like an npc for example.
 */
const soundEffect = (input) => {
  const {
    THREE,
    camera,
    name,
    url,
    distance = 20,
    loop = false,
    volume = 0.6,
    autostart = false,
  } = input;

  if (!camera || !name || !url) return;

  const listener = camera.children.filter((l) => l.name === 'camera-listener');
  if (!listener || !listener[0]) return;

  const sound = new THREE.PositionalAudio(listener[0]);
  sound.name = name;

  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(url, (buffer) => {
    sound.setBuffer(buffer);
    sound.setRefDistance(distance);
    sound.setLoop(loop);
    sound.setVolume(volume);
    if (autostart) sound.play();
  });

  return sound;
};

module.exports = soundEffect;
