document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
    safari.self.tab.setContextMenuEventUserInfo(event, { "tag": event.target.tagName, "url": event.target.href });
}
