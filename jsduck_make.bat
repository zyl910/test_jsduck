rd /s /Q "%~dp0doc"
%~dp0jsduck-5.3.4.exe --output="%~dp0doc" --images="%~dp0images" --builtin-classes --title="test_jsduck: Test JSDuck" "%~dp0src"
pause
