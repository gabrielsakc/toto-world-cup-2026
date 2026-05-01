' ============================================
'  TOTO WORLD CUP 2026
'  Abre la app sin mostrar ningun terminal
' ============================================

Dim oShell, oHTTP, scriptDir, i

Set oShell = CreateObject("WScript.Shell")
Set oHTTP  = CreateObject("MSXML2.XMLHTTP")

' Carpeta donde esta este archivo
scriptDir = Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\") - 1)

' Inicia el servidor Vite en modo oculto (ventana 0 = invisible)
oShell.Run "cmd /c cd /d """ & scriptDir & "\toto-app"" && npm run dev", 0, False

' Espera hasta que el servidor este listo (max 30 segundos)
For i = 1 To 30
    WScript.Sleep 1000
    On Error Resume Next
    oHTTP.Open "GET", "http://localhost:5173", False
    oHTTP.Send
    If oHTTP.status = 200 Then Exit For
    On Error GoTo 0
Next

' Abre el browser automaticamente
oShell.Run "http://localhost:5173"
