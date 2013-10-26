document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event)
{
	if((event.target.baseURI == 'https://twitter.com/') && (event.target.className == 'js-display-url'))
	{
		var parentNode = event.target.parentNode;
		safari.self.tab.setContextMenuEventUserInfo(event, { "tag": parentNode.tagName, "url": parentNode.href });
		return;
	}
    
	safari.self.tab.setContextMenuEventUserInfo(event, { "tag": event.target.tagName, "url": event.target.href });
}
