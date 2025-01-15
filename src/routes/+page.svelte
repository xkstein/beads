<script>
  // TODO: use callbacks to change bead_lines_pos when offset changes and control bead position with that
  import { fade, fly } from 'svelte/transition';
  import { onMount } from 'svelte';

  const states = {
    wheel: 0,
    smush: 1,
    display: 2
  }

  let game_state = $state(-1);

  // Bead RNG - Shuffles the array based on today's date
  //let bead_value = Array.from({length: 40}, () => Math.random() < 0.5);
  const n_beads = 40;

  /**
    * Returns random number and 3 seeds
    * @param {number} s1
    * @param {number} s2
    * @param {number} s3
    */
  function wichmann_hill(s1, s2, s3) {
    let new_s1 = ( 171 * s1 ) % 30269;
    let new_s2 = ( 172 * s2 ) % 30307;
    let new_s3 = ( 170 * s3 ) % 30323;

    return [ ( new_s1 / 30269.0 + new_s2 / 30307.0 + new_s3 / 30323.0 ) % 1, new_s1, new_s2, new_s3 ]
  }

  /**
    * Shuffles array with 3 seeds
    * @param {Array} arr
    * @param {number} s1
    * @param {number} s2
    * @param {number} s3
    */
  function shuffle(arr, s1, s2, s3) {
    let r = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      [r, s1, s2, s3] = wichmann_hill(s1, s2, s3);
      const j = Math.floor( r * (i + 1) );
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /** @type {boolean[]} */
  var bead_value = [];
  for (let i = 0; i < n_beads; i++) {
    bead_value.push(i < n_beads / 2);
  }

  let today = new Date();
  bead_value = shuffle(bead_value, today.getDate(), today.getMonth() + 1, today.getFullYear());

  let view_x = $state(1);
  let view_y = $state(1);

  let radius = 0.5 * (Math.sqrt(view_x ** 2 + view_y ** 2) / 4);
  let bead_radius = $derived(0.6 * Math.PI * radius / bead_value.length);

  /** @type {number[]} */
  var line_angles = [];
  for (let i = 0; i < bead_value.length; i++) {
    line_angles.push( (2 * i + 1) * Math.PI / bead_value.length );
  }

  let slice_ind = $state(null);

  var bead_lines = $state([[]]);
  let offset = $state(0);
  let bead_lines_ind = $state([]);
  let final_bead_array = [];
  var moves = $state(0);

  function slice_ring(index) {
    if (slice_ind == null) {
      slice_ind = index;
      return;
    }
    if (index == slice_ind) {
      slice_ind = null;
      return;
    }

    let ind_1 = index > slice_ind ? slice_ind : index;
    let ind_2 = index > slice_ind ? index : slice_ind;

    bead_lines = [ 
      bead_value.slice(ind_1 + 1, ind_2 + 1),  
      bead_value.slice(ind_2 + 1).concat(bead_value.slice(0,ind_1 + 1))
    ];
    
    if (bead_lines[1].length > bead_lines[0].length) {
      bead_lines = bead_lines.reverse();
    }

    slice_ind = null;
    change_game_state(states.smush);
  }
  
  function smush() {
    bead_lines_ind = [ Array(bead_lines[0].length), Array(bead_lines[1].length) ];
    let ind_top = 0;
    let ind_bot = 0;
    if (offset >= 0) {
      final_bead_array = bead_lines[0].slice(0, offset);
      ind_top = offset;
      ind_bot = 0;
      for (let i = 0; i < offset; i++) {
        bead_lines_ind[0][i] = i;
      }
    } else {
      final_bead_array = bead_lines[1].slice(0, -offset);
      ind_top = 0;
      ind_bot = -offset;
      for (let i = 0; i < -offset; i++) {
        bead_lines_ind[1][i] = i;
      }
    }

    while (ind_bot < bead_lines[1].length && ind_top < bead_lines[0].length) {
      bead_lines_ind[0][ind_top] = final_bead_array.length;
      final_bead_array.push(bead_lines[0][ind_top]);
      bead_lines_ind[1][ind_bot] = final_bead_array.length;
      final_bead_array.push(bead_lines[1][ind_bot]);

      ind_bot += 1;
      ind_top += 1;
    }

    for (let i = ind_top; i < bead_lines[0].length; i++) {
      bead_lines_ind[0][i] = final_bead_array.length + i - ind_top;
    }

    for (let i = ind_bot; i < bead_lines[1].length; i++) {
      bead_lines_ind[1][i] = final_bead_array.length + i - ind_bot;
    }

    final_bead_array = final_bead_array.concat(bead_lines[1].slice(ind_bot));
    final_bead_array = final_bead_array.concat(bead_lines[0].slice(ind_top));
    console.log(bead_lines_ind);

    bead_value = final_bead_array;
    game_state = states.display;
  }

  function change_game_state(state) {
    if (state == states.wheel) {
      let viewbox_animation = setInterval(() => {
        view_x = 0.75;
        clearInterval(viewbox_animation);
      }, 500);

      game_state = states.wheel;
    } 
    else if (state == states.smush) {
      offset = 0;
      const view_x_i = view_x;
      let animation_ind = 0;
      let animation_steps = 20;
      let viewbox_animation = setInterval(() => {
        animation_ind += 1;
        view_x = (animation_ind) * ( 4 * bead_radius * bead_value.length - view_x_i ) / animation_steps + view_x_i;
        if (animation_ind == animation_steps) {
          clearInterval(viewbox_animation);
        }
      }, 20)

      game_state = states.smush;
    }
    else if (state == states.display) {
      game_state = states.display;
    }
  }

  onMount(() => {
    view_x = 0.75;
    game_state = states.wheel;
  });
</script>

<svg class="game-window" viewBox="-{0.5 * view_x} -{0.5 * view_x} {view_x} {view_x}">
  {#if game_state == states.wheel}
    {#each bead_value as value, index}
      <circle out:fade|global={{delay: 100, duration: 200}} in:fade|global={{delay:550, duration:200}}
              r={bead_radius} 
              cx={radius * Math.cos(2 * Math.PI * index / bead_value.length)}
              cy={radius * Math.sin(2 * Math.PI * index / bead_value.length)} 
              fill={value ? "red" : "black"} />
    {/each}

    {#each line_angles as angle, index}
      <g out:fade|global={{duration: 100}} 
         opacity={index == slice_ind ? 100 : 0} 
         on:click={() => {slice_ring(index)}}>
        <line x1={(radius - 2 * bead_radius) *  Math.cos(angle)} 
              y1={(radius - 2 * bead_radius) * Math.sin(angle)} 
              x2={(radius + 2 * bead_radius) *  Math.cos(angle)} 
              y2={(radius + 2 * bead_radius) *   Math.sin(angle)} 
              stroke="grey"
              stroke-width={bead_radius / 2}
              stroke-linecap="round" />
        <circle cx={radius * Math.cos(angle)} 
                cy={radius * Math.sin(angle)}
                r={2.5 * bead_radius}
                opacity=0%/>
      </g>
    {/each}
  {:else}
    <g in:fade={{delay: 500, duration: 800}} out:fade={{y:2 * bead_radius, duration: 500}}>
      {#each bead_lines[0] as value, index}
        <circle out:fly|global={{y:2 * bead_radius, duration: 500}} 
                r={bead_radius} 
                cx={(game_state == states.smush) ? 4 * bead_radius * (index - Math.floor(bead_lines[0].length / 2)) : 3 * bead_radius * (bead_lines_ind[0][index] - Math.floor(bead_value.length / 2))}
                cy={game_state == states.smush ? -bead_radius : 0}
                fill={value ? "red" : "black"} />
      {/each}
      {#each bead_lines[1] as value, index}
        <circle out:fly|global={{y:2 * bead_radius, duration: 500}}
                r={bead_radius} 
                cx={(game_state == states.smush) ? 4 * bead_radius * (offset + index - Math.floor(bead_lines[0].length / 2) + 0.5) : 3 * bead_radius * (bead_lines_ind[1][index] - Math.floor(bead_value.length / 2))}
                cy={game_state == states.smush ? bead_radius : 0}
                fill={value ? "red" : "black"} />
      {/each}

      {#if game_state == states.smush}
        <polygon on:click={() => {offset -= 1}} points="{-0.4*view_x},{0.35*view_y} {-0.3*view_x},{0.4*view_y} {-0.3*view_x},{0.3*view_y}" fill="black" />
        <polygon on:click={() => {offset += 1}} points="{0.4*view_x},{0.35*view_y} {0.3*view_x},{0.4*view_y} {0.3*view_x},{0.3*view_y}" fill="black" />
        <g>
          <text y={0.346 * view_y} x={-0.16 * view_x} text-anchor="middle" dominant-baseline=mathematical font-size=0.09>FLIP</text>
          <rect on:click={() => {bead_lines[1] = bead_lines[1].reverse()}} width={0.2 * view_x} height={0.1 * view_y} x={-0.26 * view_x} y={0.3 * view_y} rx={bead_radius} />
        </g>
        <g>
          <text y={0.346 * view_y} x={0.11 * view_x} text-anchor="middle"  dominant-baseline=mathematical font-size=0.09>SMUSH</text>
          <rect on:click={smush} width={0.3 * view_x} height={0.1 * view_y} x={-0.04 * view_x} y={0.3 * view_y} rx={bead_radius}/>
        </g>
      {:else if game_state == states.display}
        <g>
          <text y={0.385 * view_y} x={0 * view_x} text-anchor="middle" font-size=0.1>NEXT</text>
          <rect on:click={() => {change_game_state(states.wheel); moves += 1;}} width={0.25 * view_x} height={0.1 * view_y} x={-0.125 * view_x} y={0.3 * view_y} rx={bead_radius} />
        </g>
      {/if}
    </g>
  {/if}
</svg>

{#if game_state == states.wheel}
  <div class='wheel-text' out:fly={{y:-20, duration:200}}>
    {#each 'Select two points on the wheel' as char, index}
      <span in:fade|global={{delay:5000 + index * 50, duration:800}}>{char}</span>
    {/each}
  </div>
{/if}

<div class="move_counter">MOVES: {moves}</div>

<style>
  .wheel-text {
    position: fixed;
    top: 10%;
    left: 0;
    width: 100%;
    text-align: center;
  }

  .game-window {
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
  }

  g:has(line):hover {
    transition: opacity 0.3s ease-in-out;
    opacity: 100%;
  }

  circle {
    transition: all 0.8s ease, fill 0s;
  }

  .move_counter {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  g > text {
    user-select: none;
  }

  rect {
    fill: transparent;
    stroke: black;
    stroke-width: 0.01;
  }
</style>
