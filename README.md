# STON (Smalltalk Object Notation) for Amber Smalltalk

## Note: This is not ready for use and has not been published in Bower as yet. The instructions below will not work yet.

Port of STON (Smalltalk Object Notation) for Amber Smalltalk

## Getting Started

Install Amber and create an Amber project,
as shown in [Amber Instructions](https://github.com/amber-smalltalk/amber#prerequisites).

## Use STON for Amber as a library in a client project

If not already present, create a client project
in an empty directory with `amber init`.

In a client project, run

```sh
bower install amber-ston --save
grunt devel
amber serve
```

Go to `http://localhost:4000/` in your browser and
in all packages that use STON for Amber,
add `'amber-ston/STON-Kernel', 'amber-ston/STON-Core'` to the package imports,
save the change and commit the package. Reload.

## Contributing

To bring project alive (for example after `git clone`):

```sh
npm install
bower install
grunt devel
```

Developing the project (after brought alive):
 
Start server with `amber serve` and go to `http://localhost:4000/` in your browser and follow the instructions
